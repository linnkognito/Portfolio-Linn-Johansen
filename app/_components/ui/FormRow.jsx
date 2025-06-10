function FormRow({ children, htmlFor, label, textarea = false, ...props }) {
  return (
    <div className='flex flex-col justify-center gap-2 w-full'>
      <label htmlFor={htmlFor} className='w-[100px] pl-2 font-medium'>
        {label}
      </label>

      {textarea ? (
        <textarea
          rows={5}
          className='py-1 px-4 text-txt bg-txt/15 border border-pop rounded-2xl placeholder:text-txt/50 placeholder:italic focus:bg-txt/20 '
          {...props}
        />
      ) : (
        <input
          className='py-1 px-4 text-txt bg-txt/15 border border-pop rounded-full placeholder:text-txt/50 focus:bg-txt/20'
          {...props}
        />
      )}
    </div>
  );
}

export default FormRow;
