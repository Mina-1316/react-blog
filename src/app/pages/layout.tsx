
interface PostProps {
  children: React.ReactNode;
}

export default function Post({ children }: PostProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">{children}</div>
  );
}