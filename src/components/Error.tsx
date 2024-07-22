type ErrorProps = {
  title: string;
  message?: string;
};
export default function Error({ title, message }: ErrorProps) {
  return (
    <div className="full-w full-h flex items-center justify-center p-20">
      <div className="bg-white p-10 rounded shadow-md">
        <h1 className="text-3xl font-bold">{title}</h1>
        {message && <p className="text-lg">{message}</p>}
      </div>
    </div>
  );
}
