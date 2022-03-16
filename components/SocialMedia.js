export default function SocialMedia({ href, img }) {
  return (
    <div className="w-[20px] h-[20px]  hover:-translate-y-1 transition-all active:translate-y-[0.12.5rem] duration-[400ms]">
      <a href={href} rel="noopener">
        <img src={img} alt="" className="w-full h-full" draggable="false" />
      </a>
    </div>
  );
}
