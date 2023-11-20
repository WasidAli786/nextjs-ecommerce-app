"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Card, Skeleton } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { Tabs, Tab, CardBody } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

const Login = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      The current theme is: {theme}
      <div className="flex flex-col items-start p-10 space-y-5 max-w-[600px]">
        <Tooltip showArrow color="primary" content="I am a tooltip">
          <Button color="primary" variant="shadow">
            Click me
          </Button>
        </Tooltip>

        <Checkbox color="primary">Option</Checkbox>

        <Input
          label="Email"
          placeholder="Enter your email"
          variant="faded"
          color="primary"
        />

        <Pagination total={10} initialPage={1} showShadow />

        <Select
          items={animals}
          label="Favorite Animal"
          placeholder="Select an animal"
          color="primary"
          variant="faded"
        >
          {(animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          )}
        </Select>

        <Switch aria-label="Automatic updates" onChange={handleSwitchTheme} />

        <RadioGroup label="Select your favorite city">
          <Radio value="buenos-aires">Buenos Aires</Radio>
          <Radio value="sydney">Sydney</Radio>
          <Radio value="san-francisco">San Francisco</Radio>
          <Radio value="london">London</Radio>
          <Radio value="tokyo">Tokyo</Radio>
        </RadioGroup>

        <Card className="w-[200px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>

        <div className="flex flex-col gap-6 w-full">
          <Progress size="sm" aria-label="Loading..." value={30} />
          <Progress size="md" aria-label="Loading..." value={40} />
          <Progress size="lg" aria-label="Loading..." value={50} />
        </div>

        <Spinner />

        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" color="primary" variant="bordered">
            <Tab key="photos" title="Photos">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>

        <Table aria-label="Example static collection table" shadow="md">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Login;
