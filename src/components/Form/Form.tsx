import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFormText } from "../../features/formSlice";

export const Form = (props: {createNewToDo: Function}) => {
	// const [text, setText] = useState<string>('');
	const dispatch = useDispatch();
	const text = useSelector((state: RootState) => state.form.text)

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		props.createNewToDo(text)
		dispatch(setFormText(''));
	}

	return (
		<>
			<div className="form-wrapper">
				<form action="/" onSubmit={formSubmit}>
					<label>
						<input 
							value={text}
							type="text"
							onChange={(e) => dispatch(setFormText(e.target.value))}
						/>
						<button></button>
					</label>
				</form>
			</div>
		</>
	);
};
