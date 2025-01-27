import { VStack } from '@chakra-ui/react'
import { Step, Steps } from 'chakra-ui-steps'

export type StepConfig = {
  label: string
}

export type StepperState = 'loading' | 'error' | undefined

export type VerticalStepperProps = {
  activeStep: number
  state?: StepperState
  steps: StepConfig[]
}

export const VerticalStepper = ({ state, activeStep, steps }: VerticalStepperProps) => {
  return (
    <VStack width='100%'>
      <Steps state={state} activeStep={activeStep} orientation='vertical'>
        {steps.map(step => (
          <Step key={step.label} label={step.label} />
        ))}
      </Steps>
    </VStack>
  )
}
