import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import SectionLogo from "@/components/SectionLogo";
import SectionColor from "@/components/SectionColor";
import SectionTypography from "@/components/SectionTypography";
import SectionImagery from "@/components/SectionImagery";
import SectionApplications from "@/components/SectionApplications";
import SectionDownloads from "@/components/SectionDownloads";

export default function Page() {
  return (
    <>
      <Hero />
      <TableOfContents />
      <SectionLogo />
      <SectionColor />
      <SectionTypography />
      <SectionImagery />
      <SectionApplications />
      <SectionDownloads />
    </>
  );
}
