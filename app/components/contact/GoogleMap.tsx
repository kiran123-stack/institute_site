const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow">
      <iframe
        src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;