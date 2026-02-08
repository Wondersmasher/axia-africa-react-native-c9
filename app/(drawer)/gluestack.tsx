import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  ButtonText,
} from "@/components";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GlueStack = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1'>
        <View className='flex-1 gap-5 bg-blue-200 px-6 py-10'>
          <Text className='font-bold text-center text-3xl w-full'>
            GlueStack Basic Usage
          </Text>
          <GlueStackAccordion accordionItems={accordionItems1} />
          <GlueStackAccordion accordionItems={accordionItems2} />
          <GlueStackAccordion accordionItems={accordionItems3} />
          <GlueStackAccordion accordionItems={accordionItems4} />
          <GlueStackAlertDialog />
          <GlueStackActionsheet test='test' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default GlueStack;

type GlueStackAccordionType = {
  accordionItems: AccordionItemType[];
};

const GlueStackAccordion = ({ accordionItems }: GlueStackAccordionType) => {
  return (
    <Accordion
      size='md'
      variant='filled'
      type='multiple'
      isCollapsible={true}
      isDisabled={false}
      className='w-full rounded-xl overflow-hidden'
    >
      {accordionItems.map((item, id) => {
        return (
          <AccordionItem key={id} value={`item-${id}`} className='bg-blue-100'>
            <AccordionHeader>
              <AccordionTrigger>
                <Text className='font-bold text-xl'>{item.title}</Text>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <Text className='text-gray-500 text-base'>{item.content}</Text>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

const GlueStackAlertDialog = () => {
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
  const handleClose = () => setShowAlertDialog(false);

  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Text className='font-semibold text-lg text-center'>
              Are you sure you want to delete this post?
            </Text>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text className='text-sm font-light'>
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className='mt-5 '>
            <Button onPress={handleClose} size='sm' variant='outline'>
              <ButtonText action='negative'>Cancel</ButtonText>
            </Button>
            <Button
              size='sm'
              variant='solid'
              action='negative'
              onPress={handleClose}
            >
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const GlueStackActionsheet = ({ test }: { test?: string }) => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(false);
  const handleEdit = () => {
    console.log("Edit was pressed!!");
    // setShowActionsheet(false);
  };
  const handleMarkAsUnread = () => {
    console.log("Mark as Unread was pressed!!");
    // setShowActionsheet(false);
  };
  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open Actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleEdit}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleMarkAsUnread}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled={!test} onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};

type AccordionItemType = {
  title: string;
  content: string;
};
const accordionItems1: AccordionItemType[] = [
  {
    title: "What is React Native?",
    content: `React Native is a framework for building native mobile apps using JavaScript and React. It enables code sharing between iOS and Android platforms.`,
  },
  {
    title: "Benefits of React Native",
    content: `Write once, deploy everywhere. Faster development cycles, hot reloading, and access to native APIs make it ideal for cross-platform development.`,
  },
];
const accordionItems2: AccordionItemType[] = [
  {
    title: "Frontend Development Best Practices",
    content: `Keep components small and reusable. Use proper state management, optimize rendering, and maintain clean code structure for scalability.`,
  },
  {
    title: "CSS and Styling Tips",
    content: `Use utility-first CSS frameworks like Tailwind for consistency. Avoid inline styles and keep your stylesheets organized and maintainable.`,
  },
];
const accordionItems3: AccordionItemType[] = [
  {
    title: "Database Design Fundamentals",
    content: `Normalize your database schema to reduce redundancy. Use proper indexing and relationships to maintain data integrity and performance.`,
  },
  {
    title: "API Development Guide",
    content: `Design RESTful APIs with clear endpoints. Implement proper error handling, authentication, and versioning for maintainable backend systems.`,
  },
];
const accordionItems4: AccordionItemType[] = [
  {
    title: "Testing Strategies",
    content: `Implement unit tests for business logic, integration tests for component interactions, and end-to-end tests for user workflows.`,
  },
  {
    title: "CI/CD Best Practices",
    content: `Automate your build and deployment processes. Use version control effectively and maintain separate environments for development, staging, and production.`,
  },
];
