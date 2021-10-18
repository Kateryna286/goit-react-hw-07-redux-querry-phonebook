import { useCreateContactMutation } from 'Redux/contacts/cotactsSlice';

export default function Form() {
  const [createContact] = useCreateContactMutation();

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    createContact({ name, number });

    event.currentTarget.reset();

    // if (items.some(item => item.name === name)) {
    //   alert(`${name} already exist in contact list`);
    //   return;
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          //value="name"
          //onChange={handleChange}
        />
      </label>
      <label>
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          //value="number"
          //onChange={handleChange}
        />
      </label>
      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
}
