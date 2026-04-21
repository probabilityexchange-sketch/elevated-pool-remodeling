import { motion } from 'motion/react';

type PortfolioPhoto = {
  alt: string;
  filename: string;
  src: string;
  year: number;
};

const photoModules = import.meta.glob('../assets/portfolio/elevated-pools/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const portfolioPhotos: PortfolioPhoto[] = Object.entries(photoModules)
  .map(([path, src]) => {
    const filename = path.split('/').pop() ?? src.split('/').pop() ?? 'project-photo';
    const yearMatch = filename.match(/^(\d{4})/);
    const year = yearMatch ? Number(yearMatch[1]) : 2024;
    const baseName = filename.replace(/\.[^.]+$/, '').replace(/_/g, ' ');

    return {
      alt: `Elevated Pools project photo ${baseName}`,
      filename,
      src,
      year,
    };
  })
  .sort((a, b) => b.filename.localeCompare(a.filename));

const years = [...new Set(portfolioPhotos.map((photo) => photo.year))].sort((a, b) => b - a);

const featuredPhoto = portfolioPhotos[0];

function formatYearCount(year: number) {
  const count = portfolioPhotos.filter((photo) => photo.year === year).length;
  return `${count} photos`;
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-surface py-32 px-6">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-5xl text-on-surface editorial-scale"
            >
              Real Pool Remodels. <span className="italic font-normal text-primary">Actual Work.</span>
            </motion.h2>
            <p className="mt-6 text-on-surface-variant leading-relaxed max-w-xl">
              These photos come from completed pool work in the field: demolition, resurfacing, tile, decking, coping, and finished remodels.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {years.map((year) => (
              <span
                key={year}
                className="text-[10px] font-bold uppercase tracking-widest bg-secondary-container text-on-secondary-container px-4 py-2"
              >
                {year} · {formatYearCount(year)}
              </span>
            ))}
          </div>
        </header>

        {featuredPhoto ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 mb-16"
          >
            <div className="relative overflow-hidden bg-surface-container shadow-2xl">
              <img
                src={featuredPhoto.src}
                alt={featuredPhoto.alt}
                className="w-full h-full max-h-[720px] object-cover"
                loading="eager"
              />
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-8 md:p-10 flex flex-col justify-between gap-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-3">
                  Featured Project Photo
                </p>
                <h3 className="font-headline text-4xl mb-6">Project work from the field</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  The gallery below shows the kind of remodel work we want visitors to see first: real jobs, real pool shells, and real finished backyards.
                </p>
                <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <div className="bg-surface p-4 border border-outline-variant/20">
                    <div className="text-primary mb-1">Total Images</div>
                    <div>{portfolioPhotos.length}</div>
                  </div>
                  <div className="bg-surface p-4 border border-outline-variant/20">
                    <div className="text-primary mb-1">Year Range</div>
                    <div>{years[years.length - 1]}-{years[0]}</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic">
                Scroll for the full set. The section is intentionally image-first so the work speaks for itself.
              </p>
            </div>
          </motion.div>
        ) : null}

        <div className="space-y-16">
          {years.map((year, yearIndex) => {
            const photosForYear = portfolioPhotos.filter((photo) => photo.year === year);

            return (
              <motion.section
                key={year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: yearIndex * 0.08 }}
                className="space-y-6"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2">
                      {year}
                    </p>
                    <h3 className="font-headline text-2xl">Completed pool work</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    {photosForYear.length} images
                  </span>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                  {photosForYear.map((photo) => (
                    <motion.figure
                      key={photo.filename}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="mb-6 break-inside-avoid overflow-hidden bg-surface-container shadow-lg border border-outline-variant/10"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </motion.figure>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
