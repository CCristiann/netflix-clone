import Image, { ImageProps } from "next/image";


export default function Logo({ ...props }: Partial<ImageProps>) {
    return (
        <Image {...props} alt="Logo" src={"/logo.svg"} width={128} height={32} />
    )
}