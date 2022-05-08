import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Mukesh.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Mukesh</h1>
      <p>
        I write a blog about web development- especially frontend Framework like
        React
      </p>
    </section>
  );
}
export default Hero;
