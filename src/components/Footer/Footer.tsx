import Container from "../Container/Container";

const style = {
  height: "88px",
  boxShadow: "0px 4px 15px rgba(55, 184, 136, 0.1)",
};

export default function Footer() {
  return (
    <div
      className="w-full bg-system-black"
      style={style}
    >
      <Container className="flex justify-center items-center">
        <p className="text-system-white">
          © All rights reserved 2022 - Illustration by Freepik
        </p>
      </Container>
    </div>
  );
}
