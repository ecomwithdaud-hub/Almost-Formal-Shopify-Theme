import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  Recycle,
  Gem,
  BadgeCheck,
  Shirt,
  Instagram,
} from "lucide-react";
import { Star, Smile, ArrowDoodle, Globe } from "./doodles";
import { Featured, MobileDiscovery } from "./products";
import { SocialFollow } from "./social-follow";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-art" />
      <div className="hero-content">
        <Star className="hero-star-a" />
        <h1 id="hero-title" className="cutout-title">
          <span className="word-old">OLD</span>
          <span className="word-ties">TIES.</span>
          <span className="word-new">NEW</span>
          <span className="word-stories">STORIES.</span>
        </h1>
        <div className="hero-note handwriting">
          Pre-loved
          <br />
          ties with
          <br />
          character.
        </div>
        <Link className="button hero-cta" href="/shop">
          Shop the drop <ArrowRight size={22} />
        </Link>
        <Smile className="hero-smile" />
        <Star className="hero-star-b" />
        <span className="hero-lines">〃</span>
        <span className="hero-scribble">⌁</span>
      </div>
      <div className="hero-label paper-note">
        <span>
          ONE
          <br />
          OF
          <br />
          ONE
        </span>
        <ArrowDoodle />
      </div>
      <div className="hero-side-note handwriting">
        Not
        <br />
        perfect.
        <br />
        Just.
        <br />
        Right.
      </div>
      <Star className="hero-star-c" />
      <div className="hero-tape" />
    </section>
  );
}
export function Benefits() {
  return (
    <div className="benefits paper">
      <div>
        <BadgeCheck />
        <span>
          <strong>ONE-OF-ONE PIECES</strong>
          <small>No mass production</small>
        </span>
      </div>
      <div>
        <Shirt />
        <span>
          <strong>PRE-LOVED & SUSTAINABLE</strong>
          <small>Give great pieces a second life</small>
        </span>
      </div>
      <div>
        <Heart />
        <span>
          <strong>HONEST CONDITION</strong>
          <small>What you see is what you get</small>
        </span>
      </div>
    </div>
  );
}
export function StoryBlock() {
  return (
    <section className="story-block">
      <div className="story-collage">
        <div className="photo-frame">
          <img
            src="/images/story.webp"
            alt="Vintage-inspired newspaper portrait with a red paisley tie"
          />
          <span className="handwriting">a past worth wearing.</span>
        </div>
        <div className="paper-note story-note handwriting">
          Just
          <br />
          ties.
          <br />
          But
          <br />
          different.
        </div>
        <Smile />
        <Star />
      </div>
      <div className="story-copy">
        <span className="eyebrow">A SECOND CHANCE AT A FIRST IMPRESSION.</span>
        <h2>Our story</h2>
        <p>
          Almost Formal started with a simple idea — that great style doesn’t
          need to be brand new. We find, curate and give pre-loved ties a second
          chapter.
        </p>
        <Link className="button mustard" href="/our-story">
          Read our story <ArrowRight size={19} />
        </Link>
        <div className="paper-note story-bottom handwriting">
          SAME TIES.
          <br />
          DIFFERENT
          <br />
          STORIES.
        </div>
      </div>
      <div className="thrift-poster">
        <Star />
        <span>
          THRIFT
          <br />
          WEAR
          <br />
          REPEAT.
        </span>
        <Globe />
        <Star />
      </div>
    </section>
  );
}
export function WhyThrift() {
  return (
    <section className="why-thrift paper">
      <h2>Why thrift?</h2>
      <div>
        {[
          [Leaf, "Sustainable", "Choices"],
          [Star, "Unique", "Finds"],
          [Gem, "Better", "Quality"],
          [Heart, "More", "Character"],
          [Recycle, "Less", "Waste"],
        ].map(([Icon, a, b], i) => {
          const C = Icon as React.ElementType;
          return (
            <Link href="/why-thrift" key={i}>
              <C />
              <span>
                {a as string}
                <br />
                {b as string}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export function SocialGallery() {
  return (
    <section className="social-gallery paper">
      <div className="social-heading">
        <Instagram size={25} />
        <SocialFollow />
        <ArrowDoodle />
      </div>
      <div>
        {[4, 6, 2, 3, 7].map((n, i) => (
          <Link
            key={n}
            href="/shop"
            aria-label={`Explore vintage find ${i + 1}`}
          >
            <img
              src={`/images/tie-${n}.webp`}
              alt={
                [
                  "Classic stripes",
                  "Vintage bow tie",
                  "Paisley details",
                  "Heritage pattern",
                  "Navy geometric tie",
                ][i]
              }
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
export default function HomePage() {
  return (
    <>
      <Hero />
      <MobileDiscovery />
      <Benefits />
      <Featured />
      <StoryBlock />
      <div className="bottom-collage">
        <WhyThrift />
        <div className="not-overdressed sticky-note">
          <span>
            NOT
            <br />
            OVERDRESSED.
            <br />
            JUST RIGHT.
          </span>
          <Smile />
        </div>
        <SocialGallery />
      </div>
    </>
  );
}
