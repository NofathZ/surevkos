import style from "./Card.module.css";

export default function Card({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div className={style["card"]}>
      <div className={`${style["card__img"]} w-full bg-gray-400`}>
        <img src={img} alt="img-card" className="object-cover" />
      </div>
      <div className="card__content py-4 px-6">
        <h3 className="semibold-1 text-system-black">{title}</h3>
        <p className="regular-4 text-system-black">{desc}</p>
      </div>
    </div>
  );
}
