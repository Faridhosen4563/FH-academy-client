import React from "react";

const Blog = () => {
  return (
    <div className="md:w-9/12 mx-auto my-24">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          1. What is cors?
        </div>
        <div className="collapse-content">
          <p>
            CORS stands for Cross-Origin Resource Sharing . It allows us to
            relax the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API. In other words, CORS is a browser security feature
            that restricts cross-origin HTTP requests with other servers and
            specifies which domains access your resources. Cross-Origin Resource
            Sharing (CORS) is a mechanism that uses additional HTTP headers to
            tell the browser to let a web application running at one
            origin(domain) have permission to access selected resources from a
            server at a different origin. A web application makes a cross-origin
            HTTP request when it requests a resource that has a different origin
            (domain, protocol, and port) than its own origin.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. Firebase using one of the resign is this is google product,
            its total maintenance do google so its very safe and strong for
            security.Firebase is great for quick projects: it's easy to set up,
            fast, in many cases requires only front-end logic. It lets you focus
            on your app instead of implementing custom authentication, web
            sockets or database connections. <br />
            <br />
            Auth0, MongoDB, Passport, Okta,STYTCH, and Firebase are the most
            popular alternatives and competitors to Firebase Authentication.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          3. How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The private route component is used to protect selected pages in a
            React app from unauthenticated users.The private route component is
            similar to the public route, the only change is that redirect URL
            and authenticate condition. If the user is not authenticated he will
            be redirected to the login page and the user can only access the
            authenticated routes If he is authenticated (Logged in).
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          4. What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return. <br />
            <br />
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
