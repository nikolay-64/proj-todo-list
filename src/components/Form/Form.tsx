import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFormText } from "../../features/formSlice";
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from "./Form.styled";

import plusIcon from "../../assets/images/plus.png";

export const Form = (props: {createNewToDo: Function}) => {
	const dispatch = useDispatch();
	const text = useSelector((state: RootState) => state.form.text)

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		props.createNewToDo(text)
		dispatch(setFormText(''));
	}

	return (
		<>
			<FormWrapper>
				<FormBlock action="/" onSubmit={formSubmit}>
					<FormLabel>
						<FormField
							value={text}
							type="text"
							onChange={(e) =>
								dispatch(setFormText(e.target.value))
							}
						/>
						<FormControl icon={plusIcon} />
					</FormLabel>
				</FormBlock>
			</FormWrapper>
		</>
	);
};
