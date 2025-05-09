import { Play } from "phosphor-react";
import { FormContainer, HomeContainer, CountdownContainer, Separator, StarCountdownButton, TaskInput, MinutesAmountInput } from "./style";



export function Home(){
    return(
        <HomeContainer>
            <form action="">
            <FormContainer>
            
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput id="task" list="task-suggestions" placeholder="De um nome para seu projeto" />
                
                <datalist id="task-suggestions">
                    <option value="projeto 1"></option>
                    <option value="projeto 2"></option>
                    <option value="projeto 3"></option>
                    <option value="projeto 4"></option>
                </datalist >

                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmountInput 
                    type="number" 
                    id="minutesAmount"
                    placeholder="00"
                    step={5}
                    min={5}
                    max={60}
                />

                <span>minutos.</span>
            </FormContainer>
           
            <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>


            </CountdownContainer>


            <StarCountdownButton type="submit">
                <Play size={24}/>
                Começar
            </StarCountdownButton>
            
            </form>
         </HomeContainer>
     
) 
}