import Image from 'next/image';
import image207 from "../assets/image 7.svg"
import paper from "../assets/quill_paper.svg"
import chat from "../assets/proicons_chat.svg"
import ant from "../assets/ant-design_bulb-outlined.svg"


const IntroBilla = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-24 py-12 w-full gap-[10rem]">
      <Image
        src={image207}
        alt="Billia AI illustration"
        width={200}
        height={400}
        className="h-[80rem] w-[38rem]"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-[#411a09] text-[2rem] leading-tight">
          Introducing Billia AI:
          <br /> Smarter, Faster, Personal
        </h3>
        <p className="text-[1rem] opacity-60">
          From paying school fees to buying airtime or electricity, <br />
          Billia AI makes every payment smarter, faster, and <br />
          stress-free - just by asking
        </p>

        <div className="pt-2">
          <h5 className="text-[1.5rem] text-[#2d2d2d] font-medium flex items-center gap-4 py-4">
            <span>
              <Image
                src={paper}
                alt="Pay Bills icon"
                width={24}
                height={24}
                className="w-[2.4rem] h-[2.4rem]"
              />
            </span>
            Pay Bills by typing a command
          </h5>
          <p className="text-[1.5rem] opacity-60">
            Just say {`"Pay my WAEC fees" or "Buy airtime for 0803..."`} no need to
            search or fill endless forms.
          </p>
        </div>

        <div className="pt-2">
          <h5 className="text-[1.5rem] text-[#2d2d2d] font-medium flex items-center gap-4 py-4">
            <span>
              <Image
                src={ant}
                alt="One-Tap Repeats icon"
                width={24}
                height={24}
                className="w-[2.4rem] h-[2.4rem]"
              />
            </span>
            One-Tap Repeats
          </h5>
          <p className="text-[1rem] opacity-60">
            AI remembers your past payments so you can repeat them in seconds - no <br />
            retyping required.
          </p>
        </div>

        <div className="pt-2">
          <h5 className="text-[1.5rem] text-[#2d2d2d] font-medium flex items-center gap-4 py-4">
            <span>
              <Image
                src={chat}
                alt="In-App Chat Assistance icon"
                width={24}
                height={24}
                className="w-[2.4rem] h-[2.4rem]"
              />
            </span>
            In-App Chat Assistance
          </h5>
          <p className="text-[1rem] opacity-60">
            AI remembers your past payments so you can repeat them in seconds - no <br />
            retyping required.
          </p>
        </div>
      </div>
    </section>
  )
}

export default IntroBilla
