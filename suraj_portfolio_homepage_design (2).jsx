export default function SurajPortfolioHomepage() {
  const expertise = [
    {
      title: "Food & Beverage Operations",
      text: "Leading restaurant, lounge, and outlet performance with a focus on service quality, smooth operations, and profitability.",
    },
    {
      title: "Team Leadership",
      text: "Training, guiding, and motivating hospitality teams to deliver consistent service in fast-paced hotel environments.",
    },
    {
      title: "Guest Experience",
      text: "Creating memorable dining experiences through attention to detail, service excellence, and strong floor presence.",
    },
    {
      title: "Business Performance",
      text: "Supporting operational efficiency, cost awareness, and outlet performance while maintaining premium brand standards.",
    },
  ];

  const experience = [
    {
      role: "Assistant Food & Beverage Manager",
      company: "Marriott International",
      period: "Nov 2022 – Present",
      text: "Supporting daily F&B operations, guest satisfaction, team supervision, and service excellence across premium hospitality settings.",
    },
    {
      role: "Restaurant and Bar Manager",
      company: "Marriott International",
      period: "Nov 2021 – Nov 2022",
      text: "Managed restaurant and bar operations with a strong focus on customer service, standards, and outlet coordination.",
    },
    {
      role: "Cluster Restaurant Operations Manager",
      company: "Wyndham Hotels & Resorts",
      period: "Mar 2021 – Aug 2021",
      text: "Oversaw restaurant operations and coordinated service delivery across outlets in a dynamic hospitality environment.",
    },
  ];

  const achievements = [
    "Multi-brand hospitality leadership experience in the UAE",
    "Strong background in restaurant, bar, and outlet operations",
    "Focused on guest satisfaction and service consistency",
    "Experienced in staff supervision and team coordination",
  ];

  return (
    <div className="min-h-screen bg-[#f3f7fb] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-[#dbe7f3] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xl font-semibold tracking-wide">Suraj Kumar Singh</div>
            <div className="text-sm text-[#5f6b7a]">Hospitality Portfolio</div>
          </div>
          <nav className="hidden gap-8 text-sm text-[#234c8c] md:flex">
            <a href="#about" className="transition hover:opacity-70">About</a>
            <a href="#expertise" className="transition hover:opacity-70">Expertise</a>
            <a href="#experience" className="transition hover:opacity-70">Experience</a>
            <a href="#contact" className="transition hover:opacity-70">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[#0a66c2] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Contact Me
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-[#d6e4f2] bg-white px-4 py-2 text-sm text-[#34506f] shadow-sm">
              UAE Hospitality Professional • Marriott International
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Delivering service excellence through modern hospitality leadership.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Experienced food and beverage professional with a strong track record in restaurant operations,
              guest experience, team development, and premium hotel service standards across the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="rounded-full bg-[#003580] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                View Experience
              </a>
              <a
                href="#about"
                className="rounded-full border border-[#c8d8ea] bg-white px-6 py-3 text-sm font-semibold text-[#0a66c2] transition hover:bg-[#eef5fb]"
              >
                Read Profile
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#dbe7f3] bg-white p-5 shadow-sm">
                <div className="text-2xl font-semibold">5+</div>
                <div className="mt-1 text-sm text-slate-600">Years in hospitality leadership</div>
              </div>
              <div className="rounded-2xl border border-[#dbe7f3] bg-white p-5 shadow-sm">
                <div className="text-2xl font-semibold">UAE</div>
                <div className="mt-1 text-sm text-slate-600">Luxury hotel operations experience</div>
              </div>
              <div className="rounded-2xl border border-[#dbe7f3] bg-white p-5 shadow-sm">
                <div className="text-2xl font-semibold">F&B</div>
                <div className="mt-1 text-sm text-slate-600">Restaurant and outlet specialist</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#cfe3f7] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#003580] via-[#0a66c2] to-[#5aa7ff] p-8 text-white shadow-2xl">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <div className="text-sm uppercase tracking-[0.2em] text-white/70">Current Role</div>
                <div className="mt-4 text-3xl font-semibold leading-tight">Assistant Food & Beverage Manager</div>
                <div className="mt-2 text-white/80">Marriott International</div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/60">Focus</div>
                    <div className="mt-2 text-sm leading-6 text-white/90">
                      Guest satisfaction, team coordination, outlet operations, and service standards.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/60">Approach</div>
                    <div className="mt-2 text-sm leading-6 text-white/90">
                      Calm leadership, strong floor presence, and operational discipline.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#dfeaf5] p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-[#4e6786]">About Me</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">A hospitality professional built through real operational leadership.</h2>
            </div>
            <div className="rounded-[2rem] border border-[#dbe7f3] bg-white p-8 shadow-sm">
              <p className="text-base leading-8 text-[#425466]">
                I am a results-driven hospitality professional with hands-on leadership experience in food and beverage
                operations, restaurant management, and guest service excellence. My background includes progressive roles
                across internationally recognized hotel brands, where I have developed strong expertise in team guidance,
                service consistency, and outlet performance.
              </p>
              <p className="mt-5 text-base leading-8 text-[#425466]">
                I bring a balanced approach to hospitality leadership by combining operational discipline with a genuine
                commitment to memorable guest experiences.
              </p>
            </div>
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-[#4e6786]">Core Expertise</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Where I create value</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-[#dbe7f3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-[#e7f1fb]" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6b7a]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] bg-[#003580] p-8 text-white shadow-xl">
              <div className="text-sm uppercase tracking-[0.2em] text-white/60">Experience</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Professional journey</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                A progression of leadership roles across premium hotel brands with consistent focus on food and beverage
                operations, service quality, and team performance.
              </p>
              <div className="mt-8 space-y-3">
                {achievements.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {experience.map((item) => (
                <div key={item.role} className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <div className="mt-1 text-sm font-medium text-[#0a66c2]">{item.company}</div>
                    </div>
                    <div className="text-sm text-slate-500">{item.period}</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#5f6b7a]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-[2rem] border border-[#dbe7f3] bg-white p-8 shadow-sm lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#4e6786]">Professional Profile</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ready for hospitality opportunities, leadership roles, and industry connections.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#eef5fb] p-5">
                  <div className="text-sm text-slate-500">Education</div>
                  <div className="mt-2 font-medium">BBA in Hotel/Motel Administration & Management</div>
                </div>
                <div className="rounded-2xl bg-[#eef5fb] p-5">
                  <div className="text-sm text-slate-500">Skills</div>
                  <div className="mt-2 font-medium">MICROS, Catering, Hospitality, Team Supervision</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[#dbe7f3] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="text-2xl font-semibold">Suraj Kumar Singh</div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f6b7a]">
              Hospitality professional focused on food and beverage operations, guest service excellence, and leadership
              across premium hotel environments in the UAE.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[#5f6b7a]">
            <div>Email: your-email@example.com</div>
            <div>Phone: +971 XX XXX XXXX</div>
            <div>Location: United Arab Emirates</div>
            <div>LinkedIn: linkedin.com/in/your-profile</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
