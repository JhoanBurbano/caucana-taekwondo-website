export interface NavigationLink {
  label: string;
  href: `#${string}`;
}

export interface ValueItem {
  title: string;
  description: string;
  accent: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: `#${string}`;
  audience: string;
}

export interface BeltLevel {
  name: string;
  color: string;
  textColor?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface ScheduleItem {
  label: string;
  time: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  tagline: string;
  description: string;
  metadata: string;
  primaryAction: {
    label: string;
    href: `#${string}`;
  };
  secondaryAction: {
    label: string;
    href: `#${string}`;
  };
}
