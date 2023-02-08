import Image from "next/image";
import { TypeStateImage } from "./models/interface.contact.components";

interface InterfacePropImage {
  image: TypeStateImage;
}
const ImageSend = ({ image }: InterfacePropImage) => {
  const linkProcess =
    "https://res.cloudinary.com/dqhbskhe7/image/upload/v1675814751/logo-check/t5adiwqni5w5uwzigaai.gif";
  const linkInactive =
    "https://res.cloudinary.com/dqhbskhe7/image/upload/v1675815156/logo-check/oahu3spv50g4hcc54bs0.png";
  const linkSuccess =
    "https://res.cloudinary.com/dqhbskhe7/image/upload/v1671592861/logo-check/pc0ldenmgvme72zmwlnh.png";

  const linkFail =
    "https://res.cloudinary.com/dqhbskhe7/image/upload/v1675866939/logo-check/cskykk1izndqn02uv7gn.png";
  //   const [src, setSrc] = useState<string>(linkInactive);
  let src =
    image === "success"
      ? linkSuccess
      : image === "fail"
      ? linkFail
      : image === "process"
      ? linkProcess
      : image === "transparent" && linkInactive;

  return (
    <Image
      src={src || linkInactive}
      alt="image Loading"
      width={100}
      height={100}
    />
  );
};

export default ImageSend;
