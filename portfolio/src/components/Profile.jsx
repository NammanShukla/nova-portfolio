export default function Profile() {
  return (
    <div className="bg-[#2c2c2e] p-8 flex flex-col items-center justify-center space-y-4 border-b md:border-b-0 md:border-r border-[#3a3a3c] w-full md:w-1/3">
      <div className="w-24 h-24 bg-[#A700FF] rounded-full"></div>
      <div className="text-center">
        <p className="font-mono text-sm">this is namman shukla</p>
        <p className="font-mono text-xs mt-2 whitespace-pre-line text-[#9e9e9e]">
          {`>Introduction`}
        </p>
      </div>
    </div>
  );
}