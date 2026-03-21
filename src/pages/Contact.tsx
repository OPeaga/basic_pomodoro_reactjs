import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="h-full w-full py-6 px-6 sm:px-10 lg:px-16 font-sans selection:bg-blue-200 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 h-full max-h-[850px]">
        {/* Header */}
        <div className="text-center w-full shrink-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Touch</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="flex-1 grid lg:grid-cols-3 gap-6 min-h-0">
          {/* Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-4 overflow-y-auto pr-2 no-scrollbar">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                 <MapPin className="w-5 h-5 text-blue-600" />
               </div>
               <div>
                 <h3 className="font-semibold text-slate-900 text-sm mb-0.5">Office Location</h3>
                 <p className="text-slate-500 text-xs leading-relaxed">
                   Lorem ipsum dolor<br/>12345, Ipsum City
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                 <Phone className="w-5 h-5 text-emerald-600" />
               </div>
               <div>
                 <h3 className="font-semibold text-slate-900 text-sm mb-0.5">Phone Number</h3>
                 <p className="text-slate-500 text-xs leading-relaxed">
                   +1 (555) 123-4567<br/>+1 (555) 987-6543
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                 <Mail className="w-5 h-5 text-purple-600" />
               </div>
               <div>
                 <h3 className="font-semibold text-slate-900 text-sm mb-0.5">Email Address</h3>
                 <p className="text-slate-500 text-xs leading-relaxed">
                   hello@loremipsum.com<br/>support@loremipsum.com
                 </p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 h-full flex flex-col min-h-0">
            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-slate-900 mb-4 shrink-0">Send a Message</h2>
              <form className="flex-1 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4 shrink-0">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-3 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 shrink-0">
                  <label className="text-xs font-medium text-slate-700">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?"
                    className="w-full px-3 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col min-h-[100px]">
                  <label className="text-xs font-medium text-slate-700">Message</label>
                  <textarea 
                    placeholder="Lorem ipsum..."
                    className="w-full flex-1 p-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[100px]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 px-4 shrink-0 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}