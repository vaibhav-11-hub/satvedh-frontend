import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">

      {/* HERO SECTION — MULTI-ORBIT ANIMATION */}
      <section className="min-h-screen w-full bg-gradient-to-br from-sky-600 to-sky-300 
      flex flex-col md:flex-row items-center justify-between px-10 py-20 overflow-hidden">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
            SATVEDH CONNECT
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-lg">
            Bridging Students & Professionals through Knowledge, Guidance & Opportunity.
          </p>

          <div className="mt-8 flex gap-5">
            <button className="px-6 py-3 bg-white text-sky-700 font-semibold rounded-xl shadow hover:bg-slate-100 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white/20 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* RIGHT ORBITS */}
        <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center">

          {/* Background Glow */}
          <div className="absolute w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>

          {/* OUTER RING */}
          <OrbitRing size={380} speed={32}>
            <OrbitIcon emoji="⚙️" angle={0} radius={180} />
            <OrbitIcon emoji="🏏" angle={60} radius={180} />
            <OrbitIcon emoji="🧪" angle={120} radius={180} />
            <OrbitIcon emoji="👨‍🔧" angle={180} radius={180} />
            <OrbitIcon emoji="📐" angle={240} radius={180} />
            <OrbitIcon emoji="👨‍🎨" angle={300} radius={180} />
          </OrbitRing>

          {/* MIDDLE RING */}
          <OrbitRing size={260} speed={20}>
            <OrbitIcon emoji="💻" angle={0} radius={120} />
            <OrbitIcon emoji="📘" angle={120} radius={120} />
            <OrbitIcon emoji="🎓" angle={240} radius={120} />
          </OrbitRing>

          {/* INNER RING */}
          <OrbitRing size={160} speed={14}>
            <OrbitIcon emoji="⚙️" angle={0} radius={70} />
            <OrbitIcon emoji="🧪" angle={120} radius={70} />
            <OrbitIcon emoji="📐" angle={240} radius={70} />
          </OrbitRing>

          {/* CENTER EARTH */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="w-56 h-56 rounded-full shadow-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg')",
            }}
          />
        </div>
      </section>

      {/* IMPORTANCE SECTION */}
      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-sky-600 text-center">Why Satvedh Connect?</h2>

        <p className="text-slate-600 text-center max-w-3xl mx-auto mt-4">
          A modern platform that connects students and professionals through mentorship, learning, and real-world exposure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <InfoCard title="Career Guidance" text="Get expert advice and clarity for your future path." />
          <InfoCard title="Skill Development" text="Learn industry-ready skills and upgrade yourself." />
          <InfoCard title="Professional Network" text="Connect with leaders and achievers from various fields." />
          <InfoCard title="Real Mentorship" text="1-to-1 guidance from verified professionals." />
          <InfoCard title="Opportunities" text="Find internships, projects, and training." />
          <InfoCard title="Future Planning" text="Get structured roadmaps tailored to your goals." />
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-20 px-8 bg-sky-50">
        <h2 className="text-3xl font-bold text-center text-sky-600">How to Use the Portal</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
          <StepsCard
            title="For Students"
            steps={[
              "Create your student account",
              "Login to your dashboard",
              "Explore professionals",
              "Book mentorship sessions",
            ]}
          />

          <StepsCard
            title="For Professionals"
            steps={[
              "Register your profile",
              "Add your expertise",
              "Match with students",
              "Guide & mentor",
            ]}
          />
        </div>
      </section>

      {/* WORLD IMPACT */}
      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-sky-600">Helping Students Worldwide</h2>

        <p className="text-slate-600 text-center max-w-3xl mx-auto mt-4">
          Students across the globe trust Satvedh Connect to find mentors & opportunities.
        </p>

        <div className="mt-12 flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="w-80 h-80 rounded-full shadow-2xl"
            style={{
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      {/* REVIEWS — INCREASED 6 CARDS */}
      <section className="py-20 px-8 bg-sky-50">
        <h2 className="text-3xl font-bold text-center text-sky-600">What Users Say</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          <ReviewCard name="Aarav – Student" rating={5}
            text="I found my career direction through Satvedh Connect. Amazing mentors!" />

          <ReviewCard name="Sneha – Engineer" rating={5}
            text="Guiding students here gives me purpose. Very smooth experience." />

          <ReviewCard name="Rohit – Student" rating={4}
            text="Practical guidance and easy session booking. Loved it!" />

          <ReviewCard name="Anjali – Doctor" rating={5}
            text="Happy to help students. Platform is clean and trustworthy." />

          <ReviewCard name="Karan – Student" rating={4}
            text="Helped me choose my engineering specialization." />

          <ReviewCard name="Pooja – Designer" rating={5}
            text="Great initiative! Students really benefit from real professionals." />
        </div>
      </section>

      <footer className="py-8 bg-sky-600 text-white text-center">
        <p className="text-sm">© 2025 Satvedh Connect — Empowering Students Everywhere.</p>
      </footer>
    </div>
  );
}

/* -------------------------- COMPONENTS -------------------------- */

function OrbitRing({ children, size, speed }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="absolute rounded-full border border-white/20"
      style={{ width: size, height: size }}
    >
      {children}
    </motion.div>
  );
}

function OrbitIcon({ emoji, angle, radius }) {
  return (
    <motion.div
      className="absolute text-3xl"
      style={{
        top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
        left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      {emoji}
    </motion.div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="p-6 bg-sky-100 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-sky-700">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}

function StepsCard({ title, steps }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-sky-100">
      <h3 className="text-2xl font-bold text-sky-700">{title}</h3>
      <ul className="list-disc list-inside mt-4 text-slate-600 space-y-2">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

function ReviewCard({ name, text, rating }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-sky-100">
      <h3 className="text-lg font-bold text-sky-700">{name}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
      <p className="mt-3 text-yellow-500 text-xl">{'⭐'.repeat(rating)}</p>
    </div>
  );
}






// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="w-full min-h-screen overflow-x-hidden bg-white">

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen w-full bg-gradient-to-br from-sky-700 to-sky-400 flex flex-col md:flex-row items-center justify-between px-10 py-20 overflow-hidden">
        
//         {/* --- COMETS (Option C Effect) --- */}
//         <Comet delay={0} />
//         <Comet delay={2} />
//         <Comet delay={4} />

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9 }}
//           className="w-full md:w-1/2 relative z-10"
//         >
//           <h1 className="text-6xl font-extrabold text-white drop-shadow-2xl leading-tight">
//             SATVEDH CONNECT
//           </h1>

//           <p className="mt-4 text-xl text-white/90 max-w-lg">
//             A futuristic platform that connects students with global professionals.
//           </p>

//           <div className="mt-8 flex gap-5">
//             <button className="px-6 py-3 bg-white text-sky-700 font-semibold rounded-xl shadow hover:bg-slate-200 transition">
//               Get Started
//             </button>
//             <button className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white/20 transition">
//               Learn More
//             </button>
//           </div>
//         </motion.div>

//         {/* --- RIGHT SIDE: 3D EARTH + GALAXY ORBIT --- */}
//         <div className="relative w-full md:w-1/2 h-[520px] flex items-center justify-center">

//           {/* EARTH GLOW */}
//           <div className="absolute w-96 h-96 bg-blue-300/30 blur-[100px] rounded-full"></div>

//           {/* GALAXY SPIRAL (icons in curved orbits) */}
//           <GalaxyOrbit speed={30} radius={200} icons={["💻", "📘", "🧑‍⚕️", "🧪", "🏏"]} />
//           <GalaxyOrbit speed={45} radius={280} icons={["👨‍🎨", "🧑‍🏫", "📐", "🎓"]} />
//           <GalaxyOrbit speed={60} radius={350} icons={["👨‍🔧", "🧑‍🍳", "🧑‍🚀"]} />

//           {/* --- 3D SPINNING EARTH --- */}
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//             className="relative w-64 h-64 rounded-full shadow-2xl bg-cover bg-center border-4 border-white/20"
//             style={{
//               backgroundImage:
//                 "url('https://upload.wikimedia.org/wikipedia/commons/6/6f/Earth_Eastern_Hemisphere.jpg')",
//             }}
//           >
//             {/* Light shine overlay */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- REST OF YOUR SECTIONS (Same as Before) --- */}
//       {/* IMPORTANCE */}
//       <section className="py-20 px-8 bg-white">
//         <h2 className="text-3xl font-bold text-sky-600 text-center">Why Satvedh Connect?</h2>
//         <p className="text-slate-600 text-center max-w-3xl mx-auto mt-4">
//           A modern platform that builds career clarity through real-world mentorship.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
//           <InfoCard title="Career Guidance" text="Get expert clarity on your future." />
//           <InfoCard title="Skill Development" text="Learn job-ready skills." />
//           <InfoCard title="Professional Network" text="Meet leaders worldwide." />
//           <InfoCard title="Mentorship" text="1-to-1 expert guidance." />
//           <InfoCard title="Opportunities" text="Find internships & projects." />
//           <InfoCard title="Roadmaps" text="Plan your future properly." />
//         </div>
//       </section>

//       {/* HOW TO USE */}
//       <section className="py-20 px-8 bg-sky-50">
//         <h2 className="text-3xl font-bold text-center text-sky-600">How to Use the Portal</h2>
//         <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
//           <StepsCard
//             title="For Students"
//             steps={["Create Account", "Login", "Explore Professionals", "Book Sessions"]}
//           />
//           <StepsCard
//             title="For Professionals"
//             steps={["Register", "Add Skills", "Match with Students", "Guide & Mentor"]}
//           />
//         </div>
//       </section>

//       {/* WORLD IMPACT */}
//       <section className="py-20 px-8 bg-white">
//         <h2 className="text-3xl font-bold text-center text-sky-600">Helping Students Worldwide</h2>

//         <div className="mt-12 flex justify-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//             className="w-80 h-80 rounded-full shadow-2xl"
//             style={{
//               backgroundImage:
//                 "url('https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//         </div>
//       </section>

//       {/* REVIEWS */}
//       <section className="py-20 px-8 bg-sky-50">
//         <h2 className="text-3xl font-bold text-center text-sky-600">What Users Say</h2>

//         <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
//           <ReviewCard name="Aarav – Student" rating={5} text="Great platform!" />
//           <ReviewCard name="Sneha – Engineer" rating={5} text="Students get real value." />
//           <ReviewCard name="Rohit – Student" rating={4} text="Very helpful!" />
//           <ReviewCard name="Dr. Anjali – Doctor" rating={5} text="Meaningful mentorship." />
//           <ReviewCard name="Pooja – Designer" rating={5} text="Loved helping students!" />
//           <ReviewCard name="Karan – Student" rating={4} text="Helped my career direction." />
//         </div>
//       </section>

//       <footer className="py-8 bg-sky-600 text-white text-center">
//         © 2025 Satvedh Connect — Empowering Students.
//       </footer>
//     </div>
//   );
// }

// /* ------------------ SPECIAL COMPONENTS (Option C Effects) ------------------ */

// // ★ Comet Trails
// function Comet({ delay }) {
//   return (
//     <motion.div
//       initial={{ x: -200, y: -100, opacity: 0 }}
//       animate={{ x: 1200, y: 600, opacity: 1 }}
//       transition={{
//         duration: 6,
//         repeat: Infinity,
//         delay,
//         ease: "easeInOut",
//       }}
//       className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_12px_white]"
//       style={{
//         filter: "drop-shadow(0px 0px 5px white)",
//       }}
//     />
//   );
// }

// // ★ Galaxy Orbit Spiral
// function GalaxyOrbit({ radius, speed, icons }) {
//   return (
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
//       className="absolute rounded-full border border-white/20"
//       style={{ width: radius * 2, height: radius * 2 }}
//     >
//       {icons.map((emoji, i) => (
//         <OrbitIcon
//           key={i}
//           emoji={emoji}
//           angle={(360 / icons.length) * i}
//           radius={radius}
//         />
//       ))}
//     </motion.div>
//   );
// }

// // ★ Orbiting Icon
// function OrbitIcon({ emoji, angle, radius }) {
//   return (
//     <motion.div
//       className="absolute text-3xl"
//       style={{
//         top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
//         left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
//         transform: "translate(-50%, -50%)",
//       }}
//       animate={{ y: [0, -10, 0] }}
//       transition={{ duration: 3, repeat: Infinity }}
//     >
//       {emoji}
//     </motion.div>
//   );
// }

// /* BASIC COMPONENTS */
// function InfoCard({ title, text }) {
//   return (
//     <div className="p-6 bg-sky-100 rounded-xl shadow hover:shadow-lg transition">
//       <h3 className="text-xl font-semibold text-sky-700">{title}</h3>
//       <p className="mt-2 text-slate-600">{text}</p>
//     </div>
//   );
// }

// function StepsCard({ title, steps }) {
//   return (
//     <div className="p-6 bg-white rounded-xl shadow-lg border border-sky-100">
//       <h3 className="text-2xl font-bold text-sky-700">{title}</h3>
//       <ul className="list-disc list-inside mt-4 text-slate-600 space-y-2">
//         {steps.map((s, i) => (
//           <li key={i}>{s}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function ReviewCard({ name, text, rating }) {
//   return (
//     <div className="p-6 bg-white rounded-xl shadow-lg border border-sky-100">
//       <h3 className="text-lg font-bold text-sky-700">{name}</h3>
//       <p className="mt-2 text-slate-600">{text}</p>
//       <p className="mt-3 text-yellow-500 text-xl">{'⭐'.repeat(rating)}</p>
//     </div>
//   );
// }
