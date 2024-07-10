import { Input } from "@/app/components/forms_elements/input";
import { Textarea } from "@/app/components/forms_elements/textarea";
import { Label } from "@/app/components/forms_elements/label";

export const Forms = () => {
  return (
    <form action="#" method="post" className="w-full max-w-md">
      <Label text="Imię" htmlFor="name" className="block mb-2 text-text" />
      <Input
        type="text"
        id="name"
        name="name"
        value=""
        className="w-full px-3 py-2 mb-4 border-none outline-none"
      />

      <Label text="Email" htmlFor="email" className="block mb-2 text-text" />
      <Input
        type="email"
        id="email"
        name="email"
        value=""
        className="w-full px-3 py-2 mb-4 outline-none border-none"
      />

      <Label
        text="Wiadomość"
        htmlFor="message"
        className="block mb-2 text-text"
      />
      <Textarea
        id="message"
        name="message"
        rows={50}
        className="w-full px-3 py-2 mb-4 outline-none border-none leter-spacing-1 p-10"
      />
    <br/>
      <Input
        type="submit"
        value="Wyślij"
        className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer mt-5 w-full"
      />
    </form>
  );
};
