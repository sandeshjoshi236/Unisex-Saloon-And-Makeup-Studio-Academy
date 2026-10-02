import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CalendarDays, Check, ChevronRight, Menu, Phone, Scissors, Sparkles, Star, X } from "lucide-react";
import { Button } from "../components/Button";
import hairBack from "../assets/Screenshot_2026-10-02_183230.png.asset.json";
import hairFront from "../assets/Screenshot_2026-10-02_183316.png.asset.json";
import menStyle from "../assets/Screenshot_2026-10-02_183334.png.asset.json";
import blondeLook from "../assets/Screenshot_2026-10-02_183351.png.asset.json";
import redHair from "../assets/Screenshot_2026-10-02_183416.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Brand New Unisex Salon | Tulsipur" },
      { name: "description", content: "Hair, beauty, makeup and professional academy training in Tulsipur. Book your appointment today." },
      { property: "og:title", content: "The Brand New Unisex Salon & Makeup Studio Academy" },
      { property: "og:description", content: "Beauty, style and confidence for everyone in Tulsipur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["About", "Services", "Academy", "Gallery", "Reviews", "Contact"];
const services = [
  ["Haircut & Styling", "Thoughtful cuts and polished styling for every texture."],
  ["Hair Color", "Dimensional color, highlights and expressive transformations."],
  ["Makeup Studio", "Refined looks for weddings, parties and special moments."],
  ["Hair & Skin Care", "Restorative treatments designed around your needs."],
  ["Grooming", "Professional hair, beard and personal grooming services."],
  ["Nails & Details", "Manicure, pedicure, brows and threading with precision."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <a href="#home" className="min-w-0" aria-label="The Brand New home">
            <span className="block truncate font-display text-2xl font-bold">The Brand New</span>
            <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Salon · Studio · Academy</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition hover:text-primary">{item}</a>)}
            <a href="#appointment" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Book Appointment</a>
          </nav>
          <button className="grid size-11 place-items-center rounded-full border border-border lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">{nav.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block border-b border-border/60 py-3 text-sm font-semibold">{item}</a>)}</nav>}
      </header>

      <section id="home" className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative z-10 py-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-primary">Tulsipur’s beauty destination</p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">Beauty, Style & Confidence — All in One Place</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">A professional unisex salon, makeup studio and academy where modern technique meets personal care.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appointment" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Book Appointment <ArrowRight size={16} /></a>
            <a href="#services" className="inline-flex min-h-12 items-center rounded-full border border-primary/30 px-6 text-sm font-semibold transition hover:bg-secondary">Explore Services</a>
          </div>
          <div className="mt-9 flex items-center gap-3"><div className="flex text-accent">{[1,2,3,4,5].map((n) => <Star key={n} size={17} fill="currentColor" />)}</div><strong>4.8</strong><span className="text-sm text-muted-foreground">from 50 reviews</span></div>
        </div>
        <div className="relative h-[60vh] min-h-[430px] max-h-[680px]">
          <div className="photo-reveal absolute inset-y-0 right-0 w-[86%] rounded-t-[10rem] rounded-b-md bg-secondary"><img src={hairFront.url} alt="Client with professionally styled layered hair" className="h-full w-full object-cover" /></div>
          <div className="photo-reveal absolute bottom-8 left-0 h-52 w-36 rounded-t-full border-8 border-background shadow-xl sm:h-64 sm:w-44"><img src={hairBack.url} alt="Layered blonde hair styling detail" className="h-full w-full object-cover" /></div>
          <div className="absolute right-3 top-6 rounded-full bg-background/90 px-4 py-3 text-xs font-semibold shadow-lg backdrop-blur">For every style. Every you.</div>
        </div>
      </section>

      <section id="about" className="bg-secondary/55 py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:px-8">
        <div className="photo-reveal aspect-[4/5] max-h-[650px] rounded-sm"><img src={blondeLook.url} alt="Long blonde salon styling in progress" className="h-full w-full object-cover" /></div>
        <div className="self-center"><SectionTitle eyebrow="Our salon" title="Care, craft and confidence for everyone." /><p className="mt-6 max-w-xl leading-7 text-muted-foreground">From precision hair and grooming to occasion makeup and professional beauty education, our team creates a welcoming experience for every client.</p>
          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border">{["Professional Service","Unisex Salon","Makeup Studio","Professional Training"].map((f) => <div key={f} className="card-lift bg-card p-5"><Check className="mb-4 text-primary" size={19}/><h3 className="text-xl font-semibold">{f}</h3></div>)}</div>
        </div>
      </div></section>

      <section id="services" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="What we do" title="Services, tailored to you." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">{services.map(([title, text], i) => <article key={title} className="card-lift group bg-card p-7"><span className="mb-12 grid size-11 place-items-center rounded-full bg-secondary text-primary">{i % 2 ? <Sparkles size={19}/> : <Scissors size={19}/>}</span><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><a href="#appointment" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary">Book now <ChevronRight size={15}/></a></article>)}</div>
      </div></section>

      <section id="academy" className="bg-foreground py-24 text-background"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1.2fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">The academy</p><h2 className="mt-4 text-5xl font-semibold leading-none sm:text-6xl">Learn. Create. Become a Professional.</h2><p className="mt-6 max-w-lg leading-7 text-background/70">Practical, confidence-building training for future beauty and hair professionals.</p><a href="#appointment" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground">Join Our Academy</a></div><div className="grid content-center gap-3 sm:grid-cols-2">{["Professional Makeup Course","Hair Styling Course","Beauty & Grooming Course","Bridal Makeup Training"].map((c,n)=><div key={c} className="rounded-sm border border-background/15 p-6"><span className="text-xs text-accent">0{n+1}</span><h3 className="mt-8 text-2xl">{c}</h3></div>)}</div></div></section>

      <section id="gallery" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Recent work" title="Made to be seen." />
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">{[
          [redHair.url,"Rich red waves", "col-span-2 row-span-2"], [menStyle.url,"Men’s salon styling", ""], [hairBack.url,"Layered blonde cut", ""], [hairFront.url,"Long layered style", "col-span-2"], [blondeLook.url,"Blonde transformation", "col-span-2 md:col-span-1"],
        ].map(([src, alt, span]) => <figure key={alt} className={`photo-reveal relative rounded-sm ${span}`}><img src={src} alt={alt} className="h-full w-full object-cover"/><figcaption className="absolute inset-x-0 bottom-0 bg-foreground/70 p-4 text-sm font-semibold text-background backdrop-blur-sm">{alt}</figcaption></figure>)}</div>
      </div></section>

      <section id="reviews" className="bg-secondary/55 py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Client feedback</p><p className="mt-4 font-display text-7xl font-semibold">4.8<span className="text-3xl text-primary">/5</span></p><p className="mt-2 text-muted-foreground">Based on 50 reviews</p></div><div className="grid gap-4 sm:grid-cols-2">{["The styling felt thoughtful and the result was exactly what I wanted.","A welcoming place with careful service and a very professional team."].map((q,i)=><blockquote key={q} className="rounded-sm bg-card p-7 shadow-sm"><div className="flex text-accent">{[1,2,3,4,5].map(n=><Star key={n} size={15} fill="currentColor"/>)}</div><p className="mt-6 leading-7">“{q}”</p><footer className="mt-5 text-sm text-muted-foreground">— {i ? "Recent guest" : "Salon client"}</footer></blockquote>)}</div></div></div></section>

      <section id="appointment" className="py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[.8fr_1.2fr] lg:px-8"><div><SectionTitle eyebrow="Appointments" title="Your next look starts here."/><p className="mt-6 leading-7 text-muted-foreground">Tell us what you’re looking for. We’ll call to confirm your preferred time.</p><a href="tel:9822821538" className="mt-8 inline-flex items-center gap-3 font-semibold"><span className="grid size-11 place-items-center rounded-full bg-secondary text-primary"><Phone size={18}/></span>9822821538</a></div>
        <form className="grid gap-4 rounded-sm border border-border bg-card p-6 shadow-sm sm:grid-cols-2 md:p-9" onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}>{["Full Name","Phone Number"].map(f=><label key={f} className="text-sm font-semibold">{f}<input required className="mt-2 h-12 w-full rounded-sm border bg-background px-4 font-normal outline-none focus:ring-2 focus:ring-ring" /></label>)}<label className="text-sm font-semibold">Service<select className="mt-2 h-12 w-full rounded-sm border bg-background px-4 font-normal"><option>Haircut & Styling</option><option>Hair Color</option><option>Makeup</option><option>Academy Course</option></select></label><label className="text-sm font-semibold">Preferred Date<input type="date" required className="mt-2 h-12 w-full rounded-sm border bg-background px-4 font-normal" /></label><label className="text-sm font-semibold sm:col-span-2">Message<textarea className="mt-2 min-h-28 w-full rounded-sm border bg-background p-4 font-normal" /></label><Button className="sm:col-span-2" type="submit"><CalendarDays size={17} className="mr-2"/>Request Appointment</Button>{submitted && <p role="status" className="text-sm font-semibold text-primary sm:col-span-2">Thank you — please call 9822821538 to confirm your appointment.</p>}</form>
      </div></section>

      <footer id="contact" className="bg-foreground py-14 text-background"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8"><div><h2 className="text-3xl font-semibold">The Brand New</h2><p className="mt-3 text-sm text-background/65">Unisex Salon · Makeup Studio · Academy</p></div><div><h3 className="text-lg">Visit us</h3><p className="mt-3 text-sm leading-6 text-background/65">Ga Line, Tulsipur<br/>Lumbini Province 22412</p></div><div><h3 className="text-lg">Book by phone</h3><a className="mt-3 block text-xl font-semibold text-accent" href="tel:9822821538">9822821538</a></div></div><div className="mx-auto mt-12 max-w-7xl border-t border-background/15 px-5 pt-6 text-xs text-background/50 lg:px-8">© 2026 The Brand New Unisex Salon & Makeup Studio Academy</div></footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">{eyebrow}</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-none sm:text-5xl">{title}</h2></div>;
}