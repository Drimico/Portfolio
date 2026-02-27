import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_cdgu7uf",
          "template_cppsb2j",
          form.current,
          "clajNZMpzzNfaCvVE"
        )
        .then(() => {
          toast.success(t("contact.toast.success")); 
          form.current?.reset();
        })
        .catch(() => {
          toast.error(t("contact.toast.error"));
        });
    }
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.contact_info.title")}
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.contact_info.email")}</h4>
                  <a
                    href="mailto:sergiusaprichin@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sergiusaprichin@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.contact_info.phone")}</h4>
                  <a
                    href="tel:+37368743390"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +373 687 433 90
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.contact_info.location")}</h4>
                  <span className="text-muted-foreground">
                    {t("contact.contact_info.location_value")}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{t("contact.connect")}</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/sergiu-saprichin-a99ab2377"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083624206477&locale=ru_RU"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/drimico/?next=%2F"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.send_message.title")}
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t("contact.send_message.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.send_message.name")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t("contact.send_message.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.send_message.email")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.send_message.message")}
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.send_message.message")}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {t("contact.send_message.button")}
                <Send size={16} />
              </button>
              <ToastContainer theme="dark" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
