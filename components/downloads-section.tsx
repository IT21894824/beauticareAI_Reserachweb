import { Download, FileText, Database, Code, BookOpen } from "lucide-react"

export default function DownloadsSection() {
  const downloads = [
    {
      title: "Research Papers",
      description: "Comprehensive research documentation and academic papers on AI-powered skincare analysis",
      icon: FileText,
      fileSize: "2.4 MB",
      format: "PDF",
    },
    {
      title: "Technical Documentation",
      description: "Detailed technical specifications, API documentation, and implementation guides",
      icon: BookOpen,
      fileSize: "1.8 MB",
      format: "PDF",
    },
    {
      title: "Dataset Collection",
      description: "Curated skin analysis datasets used for training and validation of AI models",
      icon: Database,
      fileSize: "156 MB",
      format: "ZIP",
    },
    {
      title: "Source Code",
      description: "Complete source code repository with implementation examples and tutorials",
      icon: Code,
      fileSize: "45 MB",
      format: "ZIP",
    },
  ]

  return (
    <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Downloads</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access research materials, documentation, and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloads.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-[#E3AADD] to-[#C8A8E9] rounded-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{item.fileSize}</span>
                        <span>•</span>
                        <span>{item.format}</span>
                      </div>

                      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#E3AADD] to-[#C8A8E9] rounded-lg hover:from-[#C8A8E9] to-[#C3C7F4] transition-all duration-300 hover:shadow-md">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
