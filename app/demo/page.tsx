'use client'
import { title } from "@/components/primitives";
import GeminiDemo from "@/components/GeminiDemo";
import {Tabs, Tab, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useState } from "react";

interface Message {
  id: string;
  role: string;
  content: string;
  createdAt: string | Date | undefined;
}

// interface Chat {
//   name: string;
//   multiMessages: Message[];
// }


export default function DocsPage() {
  const [chats, setChats] = useState<{ name: string; multiMessages: Message[]; }[]>([]);
  const [chatName, setChatName] = useState('');
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  function addChat() {
    console.log("addChat()");
    const newChat = { name: chatName, multiMessages: [] as Message[] };
    const updatedChats = [...chats, newChat];
    
    setChats(updatedChats);


    setChatName("");
    console.log("newChat: " + JSON.stringify(newChat));
    console.log("updatedChats: " + JSON.stringify(updatedChats));

  }


  return (
    <div
      className="flex flex-col gap-4"
    >
      <h1 className={title()}>Docs</h1>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  value={chatName}
                  onChange={(e) => {
                    setChatName(e.target.value);
                    console.log(chatName);
                  }}
                  className="border p-2 mb-4 w-full"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    console.log("onPress")
                    addChat();
                    console.log('chats: ' + JSON.stringify(chats));
                    onClose();
                  }}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button
        onClick={onOpen}
      >Add Chat</Button>
      {
        chats.length > 0 && (
          <div className="flex flex-col px-4">
            <div className="flex w-full flex-col">
              <Tabs aria-label="Options" placement='start'>
                {/* {Object.entries(chats ?? {}).map(([key, chat], index) => (
                  <Tab key={key} title={key}>
                    <GeminiDemo chatName={key} multiMessages={chat as Message[]} setMultiMessages={(messages: any[]) => {
                      const updatedChats: { name: string; multiMessages: Message[]; } = {
                        ...chats,
                        [key]: messages,
                      };
                      setChats(updatedChats);
                    }} />
                  </Tab>
                ))} */}
                
                {chats.map((chat, index) => (
                  <Tab key={index} title={chat.name}>
                    <GeminiDemo
                      chatName={chat.name}
                      multiMessages={chat.multiMessages}
                      setMultiMessages={(messages: Message[]) => {
                        const updatedChat = {
                          ...chat,
                          multiMessages: messages,
                        };
                        const updatedChats = chats.map((c, i) => (i === index ? updatedChat : c));
                        setChats(updatedChats);
                      }}
                    />
                  </Tab>
                ))}
                {/* <Tab key="photos" title="Photos">
                  <p>A</p>
                  <GeminiDemo />
                </Tab>
                <Tab key="music" title="Music">
                  <p>B</p>
                  <GeminiDemo />
                </Tab>
                <Tab key="videos" title="Videos">
                  <p>C</p>
                  <GeminiDemo />
                </Tab> */}
              </Tabs>
            </div>
          </div>
        )
      }
      
      {/* <GeminiDemo /> */}
    </div>
  );
}
