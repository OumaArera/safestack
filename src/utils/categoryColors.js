
export const getCategoryColors = (category) => {
  switch (category.toLowerCase()) {
    case 'software engineering':
      return {
        from: "from-yellow-600",
        to: "to-amber-500",
        bgFrom: "from-yellow-950/40",
        bgTo: "to-amber-900/20",
        text: "text-yellow-400"
      };
    case 'cybersecurity':
      return {
        from: "from-blue-600",
        to: "to-indigo-600",
        bgFrom: "from-blue-950/40",
        bgTo: "to-indigo-900/20",
        text: "text-blue-400"
      };
    case 'data science':
      return {
        from: "from-fuchsia-600",
        to: "to-rose-500",
        bgFrom: "from-fuchsia-950/40",
        bgTo: "to-rose-900/20",
        text: "text-fuchsia-400"
      };
    case 'education technology':
      return {
        from: "from-cyan-600",
        to: "to-sky-500",
        bgFrom: "from-cyan-950/40",
        bgTo: "to-sky-900/20",
        text: "text-cyan-400"
      };
    case 'healthcare it':
      return {
        from: "from-emerald-600",
        to: "to-teal-500",
        bgFrom: "from-emerald-950/40",
        bgTo: "to-teal-900/20",
        text: "text-emerald-400"
      };
    case 'community tech':
      return {
        from: "from-purple-600",
        to: "to-pink-500",
        bgFrom: "from-purple-950/40",
        bgTo: "to-pink-900/20",
        text: "text-purple-400"
      };
    default:
      return {
        from: "from-gray-600",
        to: "to-slate-500",
        bgFrom: "from-gray-950/40",
        bgTo: "to-slate-900/20",
        text: "text-gray-400"
      };
  }
};
