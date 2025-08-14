function SectionHeader({ 
  badge, 
  title, 
  highlightText, 
  description, 
  badgeColor = "bg-blue-100 text-blue-800",
  gradientFrom = "from-blue-600",
  gradientTo = "to-cyan-600"
}) {
  return (
    <div className="text-center md:mb-10 mb-6">
      {badge && (
        <div className={`inline-flex items-center ${badgeColor} text-sm font-bold px-6 py-3 rounded-full md:mb-6 mb-4 shadow-lg`}>
          {badge}
        </div>
      )}
      
      <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
        {highlightText && (
          <span className={`ms-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
            {highlightText}
          </span>
        )}
      </h2>
      
      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;