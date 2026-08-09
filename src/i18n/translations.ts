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
    findMe: string;
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
  findMe: {
    title: string;
    description: string;
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
      findMe: "Find me",
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
          description: "Docker, GCP, Argo CD, PostgreSQL, MongoDB",
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
          period: "May 2025 – Jul 2025",
          title: "ODT Training & ODT Event",
          summary: "ODDS Team",
          context:
            "A web platform for showcasing ODT training courses and events, making it easier for users to explore classes and stay updated on ODT activities.",
          whatIDid:
            "• Worked as a Software Developer on a Ruby on Rails application.\n• Developed features across the MVC stack.\n• Implemented automated testing to improve software quality.",
          outcome:
            "• Contributed to increased course enrollments.\n• Improved awareness and engagement with ODT events.\n• Delivered a reliable and maintainable application.",
          tags: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
        },
        {
          id: "sx-expo",
          role: "Software Developer Intern",
          period: "Aug 2025 – Sep 2025",
          title: "SX Expo",
          summary: "Client project · Backoffice & Application · ODDS Team",
          context:
            "A Backoffice system for managing SX Expo data and a mobile application for event attendees.",
          whatIDid:
            "• Developed both frontend and backend features.\n• Implemented and enhanced features for the Backoffice system and mobile application.",
          outcome:
            "• Supported thousands of users during the event.\n• Delivered new features as part of the production release.",
          tags: ["React", "Tailwind CSS", "GO (GIN)", "MongoDB"],
        },
        {
          id: "carbonmice",
          role: "Software Developer Intern",
          period: "Sep 2025 – Nov 2025",
          title: "CarbonMICE",
          summary: "Client project · Web Application · ODDS Team",
          context:
            "A carbon management and assessment platform by PEA for the MICE industry, enabling event organizers to calculate and track greenhouse gas emissions for each event, with a real-time dashboard.",
          whatIDid:
            "• Primarily developed the frontend according to the client's provided designs.",
          outcome:
            "• Enabled event organizers to calculate each event's carbon footprint.\n• When emissions exceeded the set limit, organizers could purchase carbon credits to offset them.",
          tags: ["Next.js", "Tailwind CSS", "GO (GIN)", "PostgreSQL"],
        },
        {
          id: "ktc",
          role: "Software Developer",
          period: "Nov 2025 – Present",
          title: "Krungthai Card (KTC)",
          summary: "Client project · Mobile Application · ODDS Team",
          context:
            "Features in KTC Mobile that help customers use their credit cards conveniently and apply for cards on their own, including promotion enrollment via WebView, an affiliate flow for KTC agents, and self-service card applications for existing customers.",
          whatIDid:
            "• Worked full stack across backend, frontend, and deployment.\n• Primarily developed the mobile frontend for both iOS and Android.\n• Contributed to backend microservices.",
          outcome:
            "• Enabled customers to apply for credit cards and promotions self-service in KTC Mobile.\n• Supported KTC agents through an affiliate enrollment flow.\n• Delivered end-to-end features spanning mobile apps and microservices.",
          tags: ["Kotlin", "Swift", "GO (GIN)", "PostgreSQL"],
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
    findMe: {
      title: "Find me",
      description:
        "Follow along on GitHub for code, or connect with me on LinkedIn.",
    },
    footer: {
      rights: "",
      tagline: "",
    },
  },
  th: {
    nav: {
      about: "เกี่ยวกับ",
      work: "ผลงาน",
      contact: "ติดต่อ",
      findMe: "ช่องทางอื่น",
      sayHi: "ทักทาย",
    },
    hero: {
      available: "พร้อมรับงาน",
      greeting: "สวัสดี!",
      nameHighlight: "ฉันชื่อ เพลง",
      intro:
        "ชื่อจริงว่า {name} - Software Developer ที่สนุกกับการเรียนรู้สิ่งใหม่ๆ ทำงานด้วยความใส่ใจและความรับผิดชอบ เพราะอยากเห็นชิ้นงานออกมาดีที่สุด!",
      introName: "ปานฟ้า พฐาบัณพร",
      viewWork: "ดูผลงาน",
      contactMe: "ติดต่อกัน",
      cardName: "ปานฟ้า",
      cardRole: "Software Developer",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      p1: "เพลง เป็น Software Developer ที่สนุกกับการเรียนรู้เทคโนโลยีใหม่ๆ และชอบท้าทายตัวเองด้วยโจทย์ยากๆ เสมอ ให้ความสำคัญกับความรับผิดชอบ เพื่อสร้างซอฟต์แวร์ที่เสถียร เชื่อถือได้ และส่งมอบผลงานที่มีคุณค่าต่อผู้ใช้และธุรกิจจริงๆ",
      p2: "เพราะเชื่อว่าซอฟต์แวร์ที่ดีไม่จำเป็นต้องซับซ้อน แค่มีวิธีคิดที่ชัดเจน พื้นฐานที่แข็งแรง และความใส่ใจต่อผู้ใช้งาน ก็เพียงพอที่จะสร้างสิ่งที่มีค่าและแก้ปัญหาได้ตรงจุดแล้ว",
      skills: [
        {
          title: "ภาษาโปรแกรม",
          description: "TypeScript, Go, Kotlin, Swift, Ruby",
          icon: "code",
        },
        {
          title: "เฟรมเวิร์ก",
          description: "React, Next.js, Rails, GO (GIN), Tailwind CSS",
          icon: "layers",
        },
        {
          title: "โมบายล์",
          description: "Android (Kotlin) และ iOS (Swift)",
          icon: "phone",
        },
        {
          title: "คลาวด์ & DevOps",
          description: "Docker, GCP, Argo CD, PostgreSQL, MongoDB",
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
          period: "พ.ค. 2025 – ก.ค. 2025",
          title: "ODT Training & ODT Event",
          summary: "ODDS Team",
          context: "เว็บไซต์สำหรับเผยแพร่หลักสูตรอบรมและกิจกรรมของ ODT เพื่อให้ผู้ใช้งานสามารถค้นหาหลักสูตรและติดตามอีเวนต์ต่าง ๆ ได้สะดวก",
          whatIDid:
            "• พัฒนาระบบด้วย Ruby on Rails ในบทบาท Software Developer\n• พัฒนาฟีเจอร์ตามสถาปัตยกรรม MVC\n• เขียน Automated Testing เพื่อเพิ่มคุณภาพของระบบ",
          outcome:
            "• ช่วยเพิ่มยอดการสมัครเรียนของหลักสูตร\n• เพิ่มการรับรู้และการมีส่วนร่วมกับกิจกรรมของ ODT\n• ส่งมอบระบบที่มีคุณภาพและดูแลรักษาได้ง่าย",
          tags: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
        },
        {
          id: "sx-expo",
          role: "Software Developer Intern",
          period: "ส.ค. 2025 – ก.ย. 2025",
          title: "SX Expo",
          summary: "โปรเจกต์ลูกค้า · Backoffice & Application · ODDS Team",
          context:
            "ระบบ Backoffice สำหรับจัดการข้อมูลภายในงาน SX Expo และ Mobile Application สำหรับผู้เข้าร่วมงาน",
          whatIDid:
            "• พัฒนาระบบทั้งฝั่ง Frontend และ Backend\n• พัฒนาและปรับปรุงฟีเจอร์สำหรับ Backoffice และ Mobile Application",
          outcome:
            "• รองรับผู้ใช้งานหลายพันคนในช่วงการจัดงาน\n• ส่งมอบฟีเจอร์ใหม่ให้ผู้ใช้งานใน Release นี้",
          tags: ["Next.js", "Tailwind CSS", "GO (GIN)", "PostgreSQL"],
        },
        {
          id: "carbonmice",
          role: "Software Developer Intern",
          period: "ก.ย. 2025 – พ.ย. 2025",
          title: "CarbonMICE",
          summary: "โปรเจกต์ลูกค้า · Web Application · ODDS Team",
          context:
            "ระบบบริหารจัดการและประเมินคาร์บอนสำหรับอุตสาหกรรม MICE ของ PEA ที่ช่วยให้ผู้จัดอีเวนต์คำนวณและติดตามการปล่อยก๊าซเรือนกระจกของแต่ละงานได้ พร้อม Dashboard แบบ real-time",
          whatIDid:
            "• พัฒนาฝั่ง Frontend เป็นหลัก ตามดีไซน์ที่ลูกค้าออกแบบมาให้",
          outcome:
            "• ผู้จัดอีเวนต์สามารถคำนวณคาร์บอนฟุตพริ้นต์ของงานได้\n• เมื่อคาร์บอนเกินขอบเขตที่กำหนด สามารถซื้อคาร์บอนเครดิตเพื่อชดเชยได้",
          tags: ["Next.js", "Tailwind CSS", "GO (GIN)", "PostgreSQL"],
        },
        {
          id: "ktc",
          role: "Software Developer",
          period: "พ.ย. 2025 – ปัจจุบัน",
          title: "Krungthai Card (KTC)",
          summary: "โปรเจกต์ลูกค้า · Mobile Application · ODDS Team",
          context:
            "พัฒนาฟีเจอร์ใน KTC Mobile เพื่อให้ลูกค้าใช้งานบัตรเครดิตและสมัครบัตรได้ด้วยตนเอง รวมถึงการสมัครโปรโมชันผ่าน WebView, ระบบ Affiliate สำหรับ Agent ของ KTC และการให้ลูกค้าเดิมสมัครบัตรเพิ่มได้ด้วยตนเอง",
          whatIDid:
            "• ทำงานแบบ Full Stack ทั้ง Backend, Frontend และการ Deploy\n• พัฒนาฝั่ง Mobile Frontend เป็นหลักทั้ง iOS และ Android\n• พัฒนา Backend ในรูปแบบ Microservice",
          outcome:
            "• ลูกค้าสามารถสมัครบัตรและโปรโมชันได้ด้วยตนเองผ่าน KTC Mobile\n• รองรับ Agent ของ KTC ผ่านระบบ Affiliate\n• ส่งมอบฟีเจอร์แบบ end-to-end ครอบคลุมทั้ง Mobile App และ Microservice",
          tags: ["Kotlin", "Swift", "GO (GIN)", "PostgreSQL"],
        },
      ],
    },
    contact: {
      title: "ติดต่อกัน",
      description:
        "สนใจร่วมงานหรืออยากคุยกัน ติดต่อมาได้เลยนะคะ ยินดีมาก ๆ เลยค่ะ",
      emailCta: "ส่งอีเมล",
      location: "กรุงเทพฯ, ประเทศไทย",
    },
    findMe: {
      title: "ช่องทางอื่น",
      description:
        "ดูโค้ดบน GitHub หรือเชื่อมต่อกันบน LinkedIn ได้เลย",
    },
    footer: {
      rights: "",
      tagline: "",
    },
  },
};
