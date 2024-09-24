import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="courses">Courses</TabsTrigger>
        <TabsTrigger value="benefits">Benefits</TabsTrigger>
        <TabsTrigger value="projects" disabled>
          Projects
        </TabsTrigger>
        <TabsTrigger value="events" disabled>
          Events
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <Card>
          <CardHeader>
            <CardTitle>Home</CardTitle>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="courses">
        <Card>
          <CardHeader>
            <CardTitle>Courses</CardTitle>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="benefits">
        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="projects">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="events">
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
