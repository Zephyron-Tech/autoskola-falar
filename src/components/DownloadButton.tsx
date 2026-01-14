interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileUrl,
  fileName,
  label,
  icon,
  className = '',
}) => {
  return (
    <a
      href={fileUrl}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center space-x-3 px-6 sm:px-8 py-4 sm:py-5 bg-skoda-dynamic-blue hover:bg-blue-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg hover:cursor-pointer ${className}`}
    >
      {icon && <span className="text-xl sm:text-2xl">{icon}</span>}
      <span className="text-base sm:text-lg">{label}</span>
    </a>
  );
};
