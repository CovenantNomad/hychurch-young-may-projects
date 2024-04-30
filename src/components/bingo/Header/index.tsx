
type HeaderProps = {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="text-[28px] font-extrabold leading-[170%] tracking-[-0.04em] text-white text-center pb-[55px] xl:text-[38px] xl:pb-20">
      <span className="inline-block py-1 px-1 bg-accent text-primary">#은혜_모먼트</span>
      {"를 "}
      <span className="">담은 사진을<br />빙고판에</span>
      {" 하나하나 채워주세요"}
    </div>
  );
};

export default Header;
