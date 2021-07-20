import Breadcrumb from "./Breadcrumb";

const HeaderBackground = () => {
  return (
    <>
      <div className='bg' style={{marginTop: "83px"}}>
        <div className='container'>
          <h1 className='text-white bg-text'>
						لونه
          </h1>
					<Breadcrumb />
        </div>
      </div>
    </>
  );
};

export default HeaderBackground;
