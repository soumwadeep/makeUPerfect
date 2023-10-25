import { useEffect, useState } from "react";
import { getTopics } from "../apiCalls/topic";
import OpenAI from "openai";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/todo.webp";
import { createTodo } from "../apiCalls/todo";

const CreateTodoAI = () => {
  useEffect(() => {
    document.title = "Create Todo | makeUPerfect";
  }, []);

  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topicId, setTopicId] = useState("");
  const [suggestedTopic, setSuggestedTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAIProvidingDesc, setIsAIProvidingDesc] = useState(false);

  const navigate = useNavigate();

  const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true,
  });

  function extractWordsInQuotes(inputString, delimiter) {
    // Use a regular expression to find all words inside quotes or brackets
    const regex = /"([^"]+)"|\(([^)]+)\)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(inputString)) !== null) {
      if (match[1]) {
        matches.push(match[1]);
      } else if (match[2]) {
        matches.push(match[2]);
      }
    }
    return matches.join(delimiter);
  }

  const callOpenAI = async () => {
    setIsAIProvidingDesc(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that suggests the best topic for a given todo from the topics list.",
          },
          {
            role: "user",
            content: `Suggest the best topic for this todo from the given topic list only whose title is : ${title} and description is : ${description}. Here are the available topic heading and its id: ${topics
              .map((topic) => `${topic.heading} (ID: ${topic._id})`)
              .join(", ")}.`,
          },
        ],
        temperature: 0,
        max_tokens: 50,
      });

      if (response.choices && response.choices.length > 0) {
        const suggestedIdea = response.choices[0].message.content;
        console.log(suggestedIdea);

        // Extract words inside quotes and brackets from the suggestedIdea
        const extractedWords = extractWordsInQuotes(suggestedIdea, ", ");

        // Extract the topicId from the extracted words
        const topicIdMatch = /ID: (\w+)/.exec(extractedWords);
        const topicId = topicIdMatch ? topicIdMatch[1] : "";

        // Extract the suggested topic without the ID
        const suggestedTopic = extractedWords.replace(/ID: \w+/, "").trim();

        setSuggestedTopic(suggestedTopic);
        setTopicId(topicId);
      }
    } catch (error) {
      console.error("Error calling OpenAI:", error);
      alert("Failed To Load: " + error.message);
    } finally {
      setIsAIProvidingDesc(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { topic: topicId, title, description };
    const response = await createTodo(data);
    if (response.status === 201) {
      alert("Todo Created Successfully!");
      navigate("/user/dashboard");
    } else {
      alert(response.data.msg);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopics();
      if (response.status === 200) {
        setTopics(response.data.topics);
      } else {
        alert(response.data.msg);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section>
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={dashboardpic} alt="dashboard" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Start Creating Your Todos Now!</h1>
                  <br />
                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        placeholder="Enter todo's title here..."
                        className="form-control"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter todo's description here..."
                        required
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Suggested Topic</label>
                      <input
                        type="text"
                        placeholder="Suggested topic based on AI"
                        className="form-control"
                        value={suggestedTopic}
                        disabled={isAIProvidingDesc}
                        onChange={(e) => setSuggestedTopic(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Topic ID</label>
                      <input
                        type="text"
                        placeholder="Topic ID of the suggested topic based on AI"
                        className="form-control"
                        value={topicId}
                        disabled={isAIProvidingDesc}
                        onChange={(e) => setTopicId(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Add Todo
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      required
                      onClick={callOpenAI}
                      disabled={isAIProvidingDesc}
                    >
                      {isAIProvidingDesc
                        ? "Suggesting..."
                        : " Suggest Topic For This"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTodoAI;
