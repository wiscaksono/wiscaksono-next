export default function Cards({ src, name, author, href }) {
  return (
    <div className="overflow-hidden rounded hover:shadow-2xl hover:scale-105 transition-all">
      <div className="aspect-w-1 aspect-h-1">
        <img src={src} alt="" className="object-cover myImage" />
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-contactbg">
        <div>
          <h1 className="font-bold text-white">{name}</h1>
          <p className="text-darkgray">{author}</p>
        </div>
        <div>
          <a href={href} className="text-orangebg font-semibold">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
