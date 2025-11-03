import Image from 'next/image';

export default function LogoBar() {
  return (
    <Image
      src="/images/irame-logo.svg"
      alt="irame.ai"
      width={125}
      height={30}
    />
  );
}
