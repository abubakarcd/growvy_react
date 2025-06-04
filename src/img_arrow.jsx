//Arrow image to be renedered from other pages
import home5img from "/home5img.png";
export default function GrowvyPitchWithImage() {
  return (
    <div className="text-center p-6 max-w-4xl mx-auto">
      <div className="flex justify-center mt-5">
        <img
          src={home5img}
          alt="arrows design"
          className="w-[250px] md:w-[450px]"
        />
      </div>
    </div>
  );
}
