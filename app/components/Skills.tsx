import { Icon } from "@iconify/react";

export default function Skills() {
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-4xl font-bold text-center mb-16">
        Some technologies I've been working with
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-2xl">
        <Icon icon="logos:python" width="60" height="60" />
        <Icon icon="logos:c-plusplus" width="60" height="60" />
        <Icon icon="logos:react" width="60" height="60" />
        <Icon icon="logos:nodejs" width="120" height="80" />
        <Icon icon="logos:tailwindcss" width="150" height="70" />
        <Icon icon="logos:nextjs" width="100" height="80" />
        <Icon icon="logos:arduino" width="70" height="70" />
        <Icon icon="logos:firebase" width="120" height="80" />
        <Icon icon="logos:vercel" width="120" height="80" />
        <Icon icon="logos:heroku" width="120" height="80" />
      </div>
    </div>
  );
}
