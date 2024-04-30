'use client'

import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { uploadImage } from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type ImageUploadModalProps = {
  number: number
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ImageUploadModal = ({ number, setOpen }: ImageUploadModalProps) => {
  const queryClient = useQueryClient()
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.substring(0, 5) === "image") {
        setImgFile(file);
      } else {
        setImgFile(null);
      }
    }
  };

  const mutation = useMutation({
    mutationFn: uploadImage,
    onSettled: () => {
      // Invalidate and refetch
      setImgFile(null)
      setPreview("")
      queryClient.invalidateQueries({ queryKey: ['getMission', number] })
      queryClient.invalidateQueries({ queryKey: ['getResults'] })
      setOpen(false)
    },
  })

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(imgFile);
    } else {
      setPreview("");
    }
  }, [imgFile])

  return (
    <DialogContent className="max-w-[calc(100%-32px)] xl:max-w-lg">
      <DialogTitle>이미지 업로드</DialogTitle>
      <DialogDescription>
        미션에 맞는 이미지를 올려주세요<br />
        (주의){" '"}선택된 파일이 없음{"'"} 이라고 나와도<br />미리보기가 보이면 파일이 선택되어 있는 상태입니다.<br />
        다른 파일을 선택하시려면 파일 선택을 눌러주세요.
      </DialogDescription>
      <div className="flex items-center space-x-2">
        <Input type="file" multiple={false} accept="image/*" onChange={onChangeImg} />
        <Button 
          size="sm" 
          className="px-3 bg-black text-white"
          onClick={() => {
            mutation.mutateAsync({
              number: number,
              file: imgFile
            })
          }}
          disabled={imgFile === null}
        >
          업로드
        </Button>
      </div>
      <div className="relative w-full">
        {preview !== "" && <Image src={preview} alt="" width={400} height={400} className="object-cover left-0 right-0 top-0 w-full" />}
      </div>
    </DialogContent>
  );
};

export default ImageUploadModal;
