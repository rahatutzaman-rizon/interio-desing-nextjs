import Image from 'next/image';

const ProjectPage = () => {
  const images = [
    { src: 'https://i.ibb.co/DDqYhTR/Rectangle-567.png', title: 'Interior Design', subtitle: 'Designer Dark House' },
    { src: 'https://i.ibb.co/DDqYhTR/Rectangle-567.png', title: 'Interior Design', subtitle: 'Woodland House Latvia' },
    { src: 'https://i.ibb.co/DDqYhTR/Rectangle-567.png', title: 'Home Decor', subtitle: 'Designer Dark House' },
    { src: 'https://i.ibb.co/DDqYhTR/Rectangle-567.png', title: 'Urban Design', subtitle: 'Woodland House Latvia' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            <Image
              src={image.src}
              alt={image.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className={`text-white text-sm font-semibold ${index % 2 === 0 ? 'self-end' : 'self-start'}`}>
                {image.title}
              </div>
              <div className={`text-white text-xs ${index % 2 === 0 ? 'self-start bg-black p-12' : 'self-end'}`}>
                {image.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;