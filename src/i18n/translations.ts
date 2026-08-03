export type Locale = "en" | "th";

export type Project = {
  id: string;
  role: string;
  period: string;
  title: string;
  summary: string;
  context: string;
  whatIDid: string;
  outcome: string;
  tags: string[];
};

export type Skill = {
  title: string;
  description: string;
  icon: "code" | "layers" | "phone" | "cloud";
};

type Dictionary = {
  nav: {
    about: string;
    work: string;
    contact: string;
    sayHi: string;
  };
  hero: {
    available: string;
    greeting: string;
    nameHighlight: string;
    intro: string;
    introName: string;
    viewWork: string;
    contactMe: string;
    cardName: string;
    cardRole: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    skills: Skill[];
  };
  work: {
    title: string;
    subtitle: string;
    context: string;
    whatIDid: string;
    outcome: string;
    comingSoon: string;
    projects: Project[];
  };
  contact: {
    title: string;
    description: string;
    emailCta: string;
    location: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
};

export const translations: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      contact: "Contact",
      sayHi: "Say hi",
    },
    hero: {
      available: "Open to opportunities",
      greeting: "Hello!",
      nameHighlight: "I'm Pleng",
      intro:
        "My full name is {name} — a Software Developer who builds thoughtful software with curiosity, ownership, and continuous learning.",
      introName: "Parnfa Phathabannaporn",
      viewWork: "View work",
      contactMe: "Get in touch",
      cardName: "Parnfa",
      cardRole: "Software Developer",
    },
    about: {
      title: "About me",
      p1: "I'm a self-driven Software Developer who enjoys learning new technologies, solving challenging problems, and continuously improving my skills. I take ownership of my work, embrace new challenges, and strive to build reliable software that delivers real value to users and businesses.",
      p2: "I believe good software doesn't have to be complicated — clear thinking, solid fundamentals, and care for the people who use it go a long way.",
      skills: [
        {
          title: "Languages",
          description: "TypeScript, Go, Kotlin, Swift, Ruby",
          icon: "code",
        },
        {
          title: "Frameworks",
          description: "React, Next.js, Rails, GIN, Tailwind CSS",
          icon: "layers",
        },
        {
          title: "Mobile",
          description: "Android (Kotlin) & iOS (Swift)",
          icon: "phone",
        },
        {
          title: "Cloud & DevOps",
          description: "Docker, GCP, Argo CD, PostgreSQL",
          icon: "cloud",
        },
      ],
    },
    work: {
      title: "Selected Work",
      subtitle: "Recent projects",
      context: "Context",
      whatIDid: "What I did",
      outcome: "Outcome",
      comingSoon: "Details coming soon.",
      projects: [
        {
          id: "odt",
          role: "Software Developer Intern",
          period: "May 2025 – Oct 2025",
          title: "ODT Training & ODT Event",
          summary: "ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
        {
          id: "sx-expo",
          role: "Software Developer Intern",
          period: "May 2025 – Oct 2025",
          title: "SX Expo",
          summary: "Backoffice & Application · ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
        {
          id: "carbonmice",
          role: "Software Developer Intern",
          period: "May 2025 – Oct 2025",
          title: "CarbonMICE",
          summary: "ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
        {
          id: "ktc",
          role: "Software Developer",
          period: "Nov 2025 – Present",
          title: "Krungthai Card (KTC)",
          summary: "Client project · ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
      ],
    },
    contact: {
      title: "Get in touch",
      description:
        "Have an interesting project, or just want to chat about building software? I'd love to hear from you.",
      emailCta: "Email me",
      location: "Bangkok, Thailand",
    },
    footer: {
      rights: "© 2026 Parnfa Phathabannaporn (Pleng).",
      tagline: "Building with curiosity & care.",
    },
  },
  th: {
    nav: {
      about: "เกี่ยวกับ",
      work: "ผลงาน",
      contact: "ติดต่อ",
      sayHi: "ทักทาย",
    },
    hero: {
      available: "พร้อมรับงาน",
      greeting: "สวัสดี!",
      nameHighlight: "ฉันชื่อ เพลง",
      intro:
        "ชื่อจริงว่า {name} — Software Developer ที่ชอบสร้างซอฟต์แวร์อย่างใส่ใจ ด้วยความอยากรู้ ความรับผิดชอบ และการเรียนรู้อย่างต่อเนื่อง",
      introName: "ปานฟ้า Phathabannaporn",
      viewWork: "ดูผลงาน",
      contactMe: "ติดต่อกัน",
      cardName: "ปานฟ้า",
      cardRole: "Software Developer",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      p1: "ฉันเป็น Software Developer ที่ชอบเรียนรู้เทคโนโลยีใหม่ ๆ แก้ปัญหาที่ท้าทาย และพัฒนาสกิลอย่างต่อเนื่อง รับผิดชอบงานของตัวเอง เปิดรับความท้าทายใหม่ ๆ และมุ่งสร้างซอฟต์แวร์ที่เชื่อถือได้ เพื่อส่งมอบคุณค่าจริงให้ผู้ใช้และธุรกิจ",
      p2: "ฉันเชื่อว่าซอฟต์แวร์ที่ดีไม่จำเป็นต้องซับซ้อน — การคิดให้ชัดเจน พื้นฐานที่แข็งแรง และความใส่ใจต่อผู้ใช้งาน ก็เพียงพอที่จะสร้างสิ่งที่มีค่า",
      skills: [
        {
          title: "ภาษาโปรแกรม",
          description: "TypeScript, Go, Kotlin, Swift, Ruby",
          icon: "code",
        },
        {
          title: "เฟรมเวิร์ก",
          description: "React, Next.js, Rails, GIN, Tailwind CSS",
          icon: "layers",
        },
        {
          title: "โมบายล์",
          description: "Android (Kotlin) และ iOS (Swift)",
          icon: "phone",
        },
        {
          title: "คลาวด์ & DevOps",
          description: "Docker, GCP, Argo CD, PostgreSQL",
          icon: "cloud",
        },
      ],
    },
    work: {
      title: "ผลงานเด่น",
      subtitle: "โปรเจกต์ที่ผ่านมา",
      context: "บริบท",
      whatIDid: "สิ่งที่ฉันทำ",
      outcome: "ผลลัพธ์",
      comingSoon: "รายละเอียดจะตามมาเร็ว ๆ นี้",
      projects: [
        {
          id: "odt",
          role: "Software Developer Intern",
          period: "พ.ค. 2025 – ต.ค. 2025",
          title: "ODT Training & ODT Event",
          summary: "ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
        {
          id: "sx-expo",
          role: "Software Developer Intern",
          period: "พ.ค. 2025 – ต.ค. 2025",
          title: "SX Expo",
          summary: "Backoffice & Application · ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
        {
          id: "carbonmice",
          role: "Software Developer Intern",
          period: "พ.ค. 2025 – ต.ค. 2025",
          title: "CarbonMICE",
          summary: "ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
        {
          id: "ktc",
          role: "Software Developer",
          period: "พ.ย. 2025 – ปัจจุบัน",
          title: "Krungthai Card (KTC)",
          summary: "โปรเจกต์ลูกค้า · ODDS Team",
          context: "",
          whatIDid: "",
          outcome: "",
          tags: [],
        },
      ],
    },
    contact: {
      title: "ติดต่อกัน",
      description:
        "มีโปรเจกต์น่าสนใจ หรืออยากคุยเรื่องการสร้างซอฟต์แวร์ ส่งข้อความมาได้เลย ฉันยินดีรับฟัง",
      emailCta: "ส่งอีเมล",
      location: "กรุงเทพฯ, ประเทศไทย",
    },
    footer: {
      rights: "© 2026 ปานฟ้า Phathabannaporn (เพลง).",
      tagline: "สร้างสรรค์ด้วยความอยากรู้และความใส่ใจ",
    },
  },
};
