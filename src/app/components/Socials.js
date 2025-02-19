export const Socials = ({ links }) => (
    <div className="flex gap-6 pt-4">
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
        >
          <Icon size={20} className="text-blue-400" />
          <span className="text-gray-300 group-hover:text-white">{label}</span>
        </a>
      ))}
    </div>
  );