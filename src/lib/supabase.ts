import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient()

export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()

  return user
}

export const createNewBingo = async ({ name }: { name: string }) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (name === "") {
    throw new Error("가족명을 입력해주세요")
  }

  if (user) {
    const { data, error } = await supabase.from('bingos').insert({
      user_id: user.id,
      family_name: name
    }).select().single()

    if (error) {
      return error
    }

  } else {
    return {
      success: false,
      message: '로그인 후 진행해 주세요.'
    }
  }
}

export const getBingo = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase
      .from('bingos')
      .select("*")
      .eq('user_id', user.id)
      .single()
  
      return data 

    } else {
      return null

    }

  } catch (error) {
    console.error(error)
    return null

  }
}

export const getMission = async ({ number }: { number: number }) => {
  try {
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase
      .from('images')
      .select("*")
      .eq('user_id', user.id)
      .eq('mission_number', number)
  
      if (!data || data.length === 0) {
        return [];
      }

      return data 

    } else {
      return null

    }

  } catch (error) {
    console.error(error)
    return null

  }
}

export const uploadImage = async ({number, file}: {number: number, file: File | null | undefined}) => {
  try {
    if (file === null || file === undefined) {
      return 
      
    } else {
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        const { data, error } = await supabase.storage
        .from('Images')
        .upload(`${user.id}_${Date.now()}`, file)
  
        if (error) {
          console.error(error)
          return null
        }

        console.log("스토리지 저장: ", data)
  
        if (data) {
          const { data: result, error } = await supabase.from('images').insert({
            user_id: user.id,
            mission_number: number,
            image_url: `https://uiakkbuaxalhtkhhekjo.supabase.co/storage/v1/object/public/Images/${data.path}`
          })

          console.log("DB저장: ", result)

          if (error) {
            console.error(error)
            return null
          }
        }
  
      } else {
        return null
  
      }
    }

  } catch (error) {
    console.error(error)
    return null

  }
}

export const getResults = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { count } = await supabase
      .from('images')
      .select("*", { count: 'exact' })
      .eq('user_id', user.id)
  
      return count 

    } else {
      return null

    }

  } catch (error) {
    console.error(error)
    return null

  }
}