function ProjectSection({ children, background = true }) {
  const styles = {
    background:
      'flex-center gap-10 bg-sec/10 p-div rounded-xs border border-pri/30  shadow-xl shadow-bgr/30',
    noBackground: 'flex gap-10 w-full px-10 my-10',
  };

  return background ? (
    <section className={styles.background}>{children}</section>
  ) : (
    <section className={styles.noBackground}>{children}</section>
  );
}

export default ProjectSection;
