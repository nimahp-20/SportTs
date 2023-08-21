export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClassess = "ourClasses",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string,
  description: string
}