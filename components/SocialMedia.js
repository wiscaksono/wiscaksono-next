export default function SocialMedia({ href, img }) {
  return (
    <div className="w-[20px] h-[20px]">
      <a href={href} rel="noopener">
        <img src={img} alt="" className="w-full h-full" />
      </a>
    </div>
  );
}
