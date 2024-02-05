

const AddParkForm = ({ handleChange, handleSubmit, formData, toggleModal }) => {
  
  const submitAndCloseModal = (e) => {
    handleSubmit(e, toggleModal);
  };
  
  return (
    <div className="add-park-container">
      <form onSubmit={submitAndCloseModal}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Park Name" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input type="text" name="backgroundImage" value={formData.backgroundImage} onChange={handleChange} placeholder="Background Image URL" />
        <button type="submit">Add Park</button>
      </form>
    </div>
  )
}

export default AddParkForm
