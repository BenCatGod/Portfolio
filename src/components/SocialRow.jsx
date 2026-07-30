import Pill from './Pill.jsx';
import { GithubIcon, LinkedinIcon, ThreadsIcon, MailIcon } from './icons.jsx';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/BenCatGod', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/benyacg', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:benya.pengkhuean@gmail.com', Icon: MailIcon }
];

export default function SocialRow() {
  return (
    <div className="social-row">
      {LINKS.map(({ label, href, Icon }) => (
        <Pill key={label} href={href} target="_blank" rel="noopener" icon={<Icon />} iconPosition="leading">
          {label}
        </Pill>
      ))}
    </div>
  );
}
